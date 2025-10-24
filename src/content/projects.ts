import { z } from "zod";
import tinad from "../assets/tinad.png"
import dashboard from "../assets/dashboard.jpg"
import ecom from "../assets/ecom.jpeg"
import auth from "../assets/auth.jpeg"

export const Project = z.object({
  title: z.string(),
  description: z.string(),
  year: z.number(),
  tags: z.array(z.string()),
  links: z.object({
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
  image: z.string().optional(),
});

export type Project = z.infer<typeof Project>;

export const projects: Project[] = [
  {
    title: "AuthServer Replacement",
    description: "Custom OIDC/OAuth2 auth service with ASP.NET Core.",
    year: 2025,
    tags: [".NET", "Identity", "Security"],
    links: { repo: "https://github.com/agdgb" },
    image: auth,
  },
  {
    title: "EREVENUE Dashboards",
    description: "BI dashboards & KPIs for revenue branches.",
    year: 2025,
    tags: ["SQL", "Bold BI"],
    links: { demo: "https://github.com/agdgb" },
    image: dashboard,
  },
  {
    title: "TinadamSMS",
    description: "SMS price lookup service for Ethiopia.",
    year: 2025,
    tags: ["Node", "Twilio"],
    links: { repo: "https://github.com/agdgb" },
    image: tinad,
  },
];
