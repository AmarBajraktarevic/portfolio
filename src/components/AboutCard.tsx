import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import TechBadge from "@/components/TechBadge";
import Marquee from "react-fast-marquee";
import { Tech } from "../../typings";
import Link from 'next/link';

export default function AboutCard({ title, description, tech, direction, span, gradient, delay }: { title: string, description: string, tech?: Tech[], direction: 'top' | 'bottom' | 'left' | 'right', span: 1 | 2, gradient: string, delay: number }) {
    return (
        <>
            <Link href="/AboutCard">
        
        </Link>

        </>
    );
}
