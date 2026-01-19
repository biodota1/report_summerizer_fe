import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              CallRep
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              A role-based platform for managing call center retention
              documentation and team performance.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/demo"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/retention-docs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Roles */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Roles
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-slate-600 dark:text-slate-400">
                Agent Portal
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                Team Leader Dashboard
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                Admin Panel
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Developer
            </h4>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Built by{" "}
              <span className="font-medium text-slate-900 dark:text-slate-200">
                Jamesmyer Geonzon
              </span>
              <br />
              Full Stack Web Developer
            </p>

            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                LinkedIn
              </a>
              <a
                href="https://yourdomain.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} CallRep. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <a
              href="/privacy"
              className="text-slate-500 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-slate-500 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
