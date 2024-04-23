import { Post } from "@/.contentlayer/generated";

export interface PostsByMonthInterface {
    [key: string]: Post[];
}
