import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { Bell, Rabbit, Shield, TrendingDown } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data : {user},
  } = await supabase.auth.getUser();

  const products = [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "SuperMan Like Fast",
      description: "Alert Nova extracts prices very fast, handling javascript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Protected and Reliable",
      description: "Working across all major e-commerce stores with build-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Alerts smartly everytime",
      description: "You gets notified about every best deal and prices drop below your targets!!!",
    }
  ]

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-100 via-pink-200 to-purple-300">
      {/* Header section */}
      <header className="bg-white/30 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10 mb-10">
        <div className="max-w-7xl mx-auto px-0 py-4 flex justify-between items-center">
          {/* Image logo */}
          <div className="flex items-center gap-3">
            <Image src={"/alert-nova.png"}
              alt="alert-nova-logo"
              width={600}
              height={200}
              className="h-20 w-40"
            />
          </div>
          {/* Auth button */}
          <AuthButton user={user} />
        </div>
      </header>

      {/* Middle section */}
      <section className=" py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* creator : Tushar Tewari */}
          <div className="inline-flex items-center gap-2 bg-pink-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">Made by ❤️ by Tushar Tewari</div>
          {/* Tagline */}
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">What if next deal saves someone's money💸everytime 🤔</h2>
          {/* Some description... */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">We track products nonstop and spot price drops before anyone else. You get fast alerts so you can snag the deal at the perfect moment.</p>

          {/* Add product form (search panel) */}
          <AddProductForm user={user} />

          {/* Features */}
          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white p-6 rounded-xl border border-gray-200">
                  {/* icons */}
                  <div className="w-12 h-12 bg-[#fbc0f7] rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-pink-600" />
                  </div>
                  {/* title and paragraph */}
                  <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* no products here section */}
      {
        user && products.length === 0 && (
          <section className="max-w-2xl mx-auto px-4 pb-20 text-center">
            <div className="bg-[#ffd5ed] rounded-xl border-2 border-dashed border-gray-300 p-12">
              <TrendingDown className="w-20 h-16 text-red-600 mx-auto mb-4 shadow-2xl"/>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products yet
              </h3>
              <p className="text-gray-600">
                Add your first product to start tracking price deals!
              </p>
            </div>
          </section>
        )
      }
    </main>
  );
}
