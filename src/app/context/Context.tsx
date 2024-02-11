"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { items } from "@/app/utilis/constants";

interface ContextProps {
    currentIndex: number;
    activeImage: boolean;
    nextCard: () => void;
    prevCard: () => void;
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

    const startAutoPlay = () => {
        // Implement your logic here
        if (autoPlayTimeoutRef) {
            clearTimeout(autoPlayTimeoutRef);
        }

        autoPlayTimeoutRef = setTimeout(() => {
            setActiveImage(true);
        }, 3000);
    };

    useEffect(() => {
        // Implement your logic here
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
    };

    return (
        // Provide the context value to the children
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
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
