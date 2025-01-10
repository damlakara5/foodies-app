'use client'
import { useFormStatus } from "react-dom";

export function MealsFormSubmit ()
{
    const {pending} = useFormStatus(); //status is object that has a pending property which is true if there is ongoing request

    return <button disabled={pending}>
        {
            pending ? "Submitting..." : "Share Meal"
        }
    </button>

}