import { useState } from "react";
import { z, ZodError } from "zod";
import { SEO } from "../lib/seo";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

// Social links data
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/agdgb",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
  {
    name: "Email",
    url: "mailto:you@example.com",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
];

export function Contact() {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Create mailto link
      const subject = `Portfolio Inquiry — ${validatedData.name}`;
      const body = `Hi Mesfin,

I'm reaching out through your portfolio contact form.

Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}

Best regards,
${validatedData.name}`;

      const mailtoUrl = `mailto:you@example.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open mailto link
      window.open(mailtoUrl, "_blank");

      // Show success toast
      setToast({
        type: "success",
        message: "Email client opened! Please send your message.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (e instanceof ZodError) {
        setFieldErrors(e.flatten().fieldErrors);
      } else {
        console.error(e);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleSubmit(e as any);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Mesfin Kenaw. Available for freelance work, collaboration opportunities, and technical discussions."
        path="/contact"
      />

      <Section title="Get In Touch" className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and
              meaningful conversations. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>
              {fieldErrors.email?.[0] && (
                <p className="mt-1 text-xs text-red-600">
                  {fieldErrors.email[0]}
                </p>
              )}

              {/* Toast Messages */}
              {toast && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    toast.type === "success"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                  }`}
                >
                  {toast.message}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                onKeyDown={handleKeyDown}
                className="space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors duration-200 ${
                      errors.name
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Your full name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors duration-200 ${
                      errors.email
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="your.email@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors duration-200 resize-vertical ${
                      errors.message
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Tell me about your project, idea, or just say hello!"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  This will open your email client with a pre-filled message.
                </p>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Available for
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Freelance Work</Badge>
                    <Badge variant="secondary">Collaboration</Badge>
                    <Badge variant="secondary">Consulting</Badge>
                    <Badge variant="secondary">Mentoring</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Response Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I typically respond within 24-48 hours. For urgent matters,
                    feel free to reach out on social media.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect on Social Media
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target={link.name === "Email" ? "_self" : "_blank"}
                        rel={
                          link.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                        aria-label={`Visit ${link.name} profile`}
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d={link.icon} />
                        </svg>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
