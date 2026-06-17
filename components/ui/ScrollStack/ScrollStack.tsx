"use client";

import {
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export function ScrollStackItem({ children, itemClassName = "" }: ScrollStackItemProps) {
  return (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
  );
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

interface CardTransform {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

function readTranslateY(element: HTMLElement): number {
  const transform = window.getComputedStyle(element).transform;
  if (!transform || transform === "none") return 0;
  return new DOMMatrixReadOnly(transform).m42;
}

export default function ScrollStack({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardBaseTopsRef = useRef<number[]>([]);
  const endBaseTopRef = useRef(0);
  const lastTransformsRef = useRef(new Map<number, CardTransform>());
  const lastScrollTopRef = useRef(-1);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(String(value));
  }, []);

  const getScrollTop = useCallback(() => {
    if (useWindowScroll) {
      return window.scrollY;
    }
    return scrollerRef.current?.scrollTop ?? 0;
  }, [useWindowScroll]);

  const getContainerHeight = useCallback(() => {
    if (useWindowScroll) {
      return window.innerHeight;
    }
    return scrollerRef.current?.clientHeight ?? 0;
  }, [useWindowScroll]);

  const measureLayoutPositions = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>(".scroll-stack-card")
    );

    cardsRef.current = cards;
    cardBaseTopsRef.current = cards.map((card) => {
      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY - readTranslateY(card);
      }
      return card.offsetTop;
    });

    const endElement = scroller.querySelector<HTMLElement>(".scroll-stack-end");
    endBaseTopRef.current = endElement
      ? useWindowScroll
        ? endElement.getBoundingClientRect().top +
          window.scrollY -
          readTranslateY(endElement)
        : endElement.offsetTop
      : 0;
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !cardBaseTopsRef.current.length) return;

    const scrollTop = getScrollTop();
    if (scrollTop === lastScrollTopRef.current) return;
    lastScrollTopRef.current = scrollTop;

    const containerHeight = getContainerHeight();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endBaseTopRef.current;
    const lastIndex = cardsRef.current.length - 1;
    const lastCardTop = cardBaseTopsRef.current[lastIndex] ?? 0;
    const pinEnd = useWindowScroll
      ? lastCardTop - scaleEndPositionPx + itemStackDistance * lastIndex + 32
      : endElementTop - containerHeight / 2;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardBaseTopsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardBaseTopsRef.current.length; j++) {
          const jTriggerStart =
            (cardBaseTopsRef.current[j] ?? 0) - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          blur = (topCardIndex - i) * blurAmount;
        }
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform: CardTransform = {
        translateY,
        scale,
        rotation,
        blur,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.01 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.0001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.01 ||
        lastTransform.blur !== newTransform.blur;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "none";
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollTop,
    getContainerHeight,
    useWindowScroll,
  ]);

  const handleScroll = useCallback(() => {
    lastScrollTopRef.current = -1;
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || useWindowScroll) return;

    const inner = scroller.querySelector(".scroll-stack-inner");
    if (!inner) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: inner as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    measureLayoutPositions();

    cardsRef.current.forEach((card, i) => {
      if (i < cardsRef.current.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }

      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translate3d(0, 0, 0)";
      card.style.filter = "none";
      card.style.zIndex = String(i + 1);
    });

    lastScrollTopRef.current = -1;
    updateCardTransforms();

    if (useWindowScroll) {
      const raf = () => {
        updateCardTransforms();
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
    } else {
      setupLenis();
    }

    const remeasure = () => {
      lastTransformsRef.current.clear();
      lastScrollTopRef.current = -1;
      measureLayoutPositions();
      updateCardTransforms();
    };

    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(scroller);

    if (useWindowScroll) {
      window.addEventListener("resize", remeasure, { passive: true });
    }

    return () => {
      resizeObserver.disconnect();
      if (useWindowScroll) {
        window.removeEventListener("resize", remeasure);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardBaseTopsRef.current = [];
      endBaseTopRef.current = 0;
      lastTransformsRef.current.clear();
      lastScrollTopRef.current = -1;
    };
  }, [
    itemDistance,
    useWindowScroll,
    measureLayoutPositions,
    setupLenis,
    updateCardTransforms,
  ]);

  const scrollerClassName = [
    "scroll-stack-scroller",
    useWindowScroll ? "scroll-stack-scroller--window" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={scrollerClassName} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" aria-hidden="true" />
      </div>
    </div>
  );
}
