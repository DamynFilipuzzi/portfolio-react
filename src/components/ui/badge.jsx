import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-slate-200 my-1 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
        laravel:
          "border-transparent bg-laravel/80 text-slate-50 hover:bg-laravel",
        php: "border-transparent bg-php/80 text-slate-50 hover:bg-php",
        mysql: "border-transparent bg-mysql/80 text-slate-50 hover:bg-mysql",
        js: "border-transparent bg-js/80 text-slate-50 hover:bg-js",
        jquery: "border-transparent bg-jquery/80 text-slate-50 hover:bg-jquery",
        html: "border-transparent bg-html/80 text-slate-50 hover:bg-html",
        css: "border-transparent bg-css/80 text-slate-50 hover:bg-css",
        ajax: "border-transparent bg-ajax/80 text-slate-50 hover:bg-ajax",
        bootstrap:
          "border-transparent bg-bootstrap/80 text-slate-50 hover:bg-bootstrap",
        docker: "border-transparent bg-docker/80 text-slate-50 hover:bg-docker",
        postgresql:
          "border-transparent bg-postgresql/80 text-slate-50 hover:bg-postgresql",
        react: "border-transparent bg-react/80 text-slate-50 hover:bg-react",
        aws: "border-transparent bg-aws/80 text-slate-50 hover:bg-aws",
        tailwind:
          "border-transparent bg-tailwind/80 text-slate-50 hover:bg-tailwind",
        firebase:
          "border-transparent bg-firebase/80 text-slate-50 hover:bg-firebase",
        nodejs: "border-transparent bg-nodejs/80 text-slate-50 hover:bg-nodejs",
        nextjs: "border-transparent bg-nextjs/80 text-slate-50 hover:bg-nextjs",
        vercel: "border-transparent bg-vercel/80 text-slate-50 hover:bg-vercel",
        python: "border-transparent bg-python/80 text-slate-50 hover:bg-python",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
