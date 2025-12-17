"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { LogIn, LogOut } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { signOut } from '@/app/actions';

const AuthButton = ({ user }) => {
    const [showAuthModal, setShowAuthModal] = useState(false)
    if (user) {
        return (
            <form action={signOut}>
                <Button variant='ghost' size="sm" type="submit" className="bg-[#f6f6f6] gap-2">
                    <LogOut className='w-4 h-4' />
                    SignOut
                </Button>
            </form>
        )
    }
    return (
        <>
            <Button onClick={() => setShowAuthModal(true)} variant="default" className="bg-pink-600 hover:bg-pink-400" size="lg">
                <LogIn className="h-4 w-3" />
                Sign In
            </Button>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </>
    )
}

export default AuthButton