"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { items, steps } from "@/app/utilis/constants";

interface ContextProps {
    currentIndex: number;
    activeImage: boolean;
    nextCard: () => void;
    prevCard: () => void;
    // Additional properties for the Steps component
    currentStepIndex: number;
    nextStep: () => void;
    prevStep: () => void;
}

const Context = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeImage, setActiveImage] = useState(true);

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    let autoPlayTimeoutRef: NodeJS.Timeout | undefined;

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setActiveImage(false);
        startAutoPlay();
    };

    const prevCard = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
        setActiveImage(false);
        startAutoPlay();
    };

    const nextStep = () => {
        setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    };

    const prevStep = () => {
        setCurrentStepIndex(
            (prevIndex) => (prevIndex - 1 + steps.length) % steps.length
        );
    };

    const startAutoPlay = () => {
        if (autoPlayTimeoutRef) {
            clearTimeout(autoPlayTimeoutRef);
        }

        autoPlayTimeoutRef = setTimeout(() => {
            setActiveImage(true);
        }, 3000);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (activeImage) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, 3000);
        }

        return () => {
            clearInterval(interval);

            if (autoPlayTimeoutRef) {
                clearTimeout(autoPlayTimeoutRef);
            }
        };
    }, [activeImage, autoPlayTimeoutRef]);

    const contextValue = {
        currentIndex,
        activeImage,
        nextCard,
        prevCard,
        currentStepIndex,
        nextStep,
        prevStep,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useLatestProperty = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error(
            "useLatestProperty must be used within a ContextProvider"
        );
    }
    return context;
};
