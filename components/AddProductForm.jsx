"use client";

import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';

const AddProductForm = ({ user }) => {

  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {

  }
  return (
    <>
    {/* input form */}
      <form onSubmit={handleSubmit} className='w-full max-w-2xl mx-auto'>
        <div className='flex flex-col sm:flex-row gap-2'>
          {/* Link Pasting input */}
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste the product/item URL (Amazon,Walmart,etc.)"
            className="h-12 text-base border-[#f8b7cd] border-4"
            required
            disabled={loading}
          />
          {/* Button */}
          <Button className="bg-pink-500 hover:bg-pink-600 h-10 sm:h-12 px-8 cursor-pointer"
            type="submit"
            disabled={loading}
            size={"lg"}
          >
            {loading ? (
              <>
                <LoaderIcon className='mr-2 h-4 w-4 animate-spin bg-amber-200' />
                Finding...
              </>
            ) : (
              "Hunt prices"
            )}
          </Button>
        </div>
      </form>

      {/* Auth model */}
          
    </>
  )
}

export default AddProductForm