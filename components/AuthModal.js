"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/client"

export function AuthModal({ isOpen, onClose }) {
    const supabase = createClient();
    const handleGoogleLogin = async () => {
        const { origin } = window.location;
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${origin}/auth/callback`,
            }
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Sign in to continue</DialogTitle>
                    <DialogDescription>
                        Track Product Changes and get Alerts on price deals and drops!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">

                    <Button onClick={handleGoogleLogin} variant="outline" className="w-full gap-2" size="lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                        >
                            <defs>
                                <linearGradient id="a" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#fff" stop-opacity="0.1" />
                                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.39 13.02 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.08 24.55c0-1.57-.14-3.08-.39-4.55H24v9.02h12.41c-.54 2.9-2.19 5.36-4.67 7.01l7.52 5.84C43.93 37.89 46.08 31.74 46.08 24.55z" />
                            <path fill="#FBBC05" d="M10.54 27.41c-.5-1.49-.79-3.07-.79-4.7 0-1.63.29-3.21.79-4.7l-7.98-6.19C.92 14.29 0 18.02 0 21.96c0 3.94.92 7.67 2.56 11.14l7.98-5.69z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.79l-7.52-5.84C30.47 37.91 27.45 39 24 39c-6.26 0-11.59-3.5-14.46-8.65l-7.98 5.69C6.51 42.62 14.62 48 24 48z" />
                            <path fill="url(#a)" d="M24 4c11.05 0 20 8.95 20 20S35.05 44 24 44 4 35.05 4 24 12.95 4 24 4z" />
                        </svg>
                        Continue with Google
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
