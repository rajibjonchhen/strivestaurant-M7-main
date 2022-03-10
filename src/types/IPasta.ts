import { IComment } from "./IComment";

    export interface IPasta {
        id: number;
        name: string;
        image: string;
        category: string;
        label: string;
        price: string;
        description: string;
        comments?:IComment[]
    }
