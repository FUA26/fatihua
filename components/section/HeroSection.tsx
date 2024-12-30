import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { CreateAppAnimation } from "../common/animation";

function HeroSection() {
  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden bg-fd-background px-2 pt-12 max-md:text-center md:px-4 md:pt-12 ">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex mb-3">
            <div className="inline-flex  items-center gap-1 bg-[#F4F5F6] p-1 rounded-[100px] pr-[10px]">
              <div className="text-white inline-block bg-primary p-2 rounded-[100px] text-[10px] font-semibold">
                New
              </div>
              <p className="text-[#31373D]">BandaNaiera Project</p>
              <div>
                <ChevronRight />
              </div>
            </div>
          </div>
          <h1 className="mb-4 max-w-[600px] text-4xl font-medium">
            Hi, I&apos;m Fatih UA
          </h1>
          <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
            Experienced and Versatile Software Engineer creating magic from code
            to transform ideas into impactful solutions.
          </p>
          <div className="inline-flex items-center gap-3 max-md:mx-auto">
            <Link
              href="/docs/ui"
              className={cn(
                buttonVariants({ size: "lg", className: "rounded-full" })
              )}
            >
              Getting Started
            </Link>
            <a
              href="https://githubbox.com/fuma-nama/fumadocs-ui-template"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "rounded-full bg-fd-background",
                })
              )}
            >
              More About Me
            </a>
          </div>
        </div>
        <div className="flex-1">
          <CreateAppAnimation />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
