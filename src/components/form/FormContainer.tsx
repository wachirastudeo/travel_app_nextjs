"use client";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";

const initialState = {
    message: "",
};

const FormContainer = ({ action, children }: { action: actionFunction, children: React.ReactNode }) => {
    const { toast } = useToast();
    const [state, formAction] = useActionState(action, initialState);

    useEffect(() => {
        if (state.message) {
            toast({ description: state.message });
        }
    }, [state, toast]); // Add 'toast' to the dependency array

    return <form action={formAction}>{children}</form>;
};

export default FormContainer;
