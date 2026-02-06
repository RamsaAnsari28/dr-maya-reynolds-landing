
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      {/* SEO / Meta Tags */}
      <Head>
        <title>Dr. Maya Reynolds | Therapy & Mental Health Services</title>
        <meta
          name="description"
          content="High-quality therapy services by Dr. Maya Reynolds, PsyD. Specializing in anxiety, trauma, and burnout therapy for adults in Santa Monica, CA."
        />
        <meta
          name="keywords"
          content="Therapist, Anxiety Therapy, Trauma Therapy, Burnout Therapy, Mental Health, Dr. Maya Reynolds, Santa Monica, California"
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dr. Maya Reynolds, PsyD",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123th Street 45 W",
        "addressLocality": "Santa Monica",
        "addressRegion": "CA",
        "postalCode": "90401",
        "addressCountry": "US"
      },
      "areaServed": "California",
      "medicalSpecialty": ["Anxiety Therapy", "Trauma Therapy", "Burnout Therapy"],
      "url": "https://dr-maya-reynolds-landing.vercel.app/"
    })
  }}
/>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dr-maya-reynolds-landing.vercel.app/" />


        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Dr. Maya Reynolds | Therapy & Mental Health Services" />
        <meta
          property="og:description"
          content="Professional mental health therapy services by Dr. Maya Reynolds, PsyD. Personalized care for anxiety, trauma, and burnout in Santa Monica, CA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dr-maya-reynolds-landing.vercel.app/" />
        <meta property="og:image" content="/images/hero-og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Maya Reynolds | Therapy & Mental Health Services" />
        <meta
          name="twitter:description"
          content="Professional mental health therapy services by Dr. Maya Reynolds, PsyD. Personalized care for anxiety, trauma, and burnout in Santa Monica, CA."
        />
        <meta name="twitter:image" content="/images/hero-og-image.jpg" />
      </Head>

      {/* MAIN CONTENT */}
      <main className="w-full bg-linear-to-br from-[#f7f3ef] via-[#eef5f2] to-[#ffffff] text-slate-800 font-sans">

        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <span className="font-bold text-slate-800">Dr. Maya Reynolds, PsyD</span>
    <nav className="space-x-6 text-slate-600">
      <a href="#services" className="hover:text-teal-700">Services</a>
      <a href="#office" className="hover:text-teal-700">Office</a>
      <a href="#faq" className="hover:text-teal-700">FAQs</a>
    </nav>
  </div>
</header>

        {/* HERO SECTION */}
<section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  {/* Left Column: Text */}
  <div>
    <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F5ECE2] text-[#8B5E3C] text-sm font-medium">
      Santa Monica, California
    </span>

    <h1 className="font-serif text-6xl font-bold leading-tight mb-6 text-slate-800">
      Anxiety & Trauma Therapy in <span className="text-[#8B5E3C]">Santa Monica, CA</span>
    </h1>

    <p className="text-lg text-slate-600 mb-10 max-w-xl">
      Compassionate, evidence-based care with Dr. Maya Reynolds, PsyD. Helping adults
      who feel overwhelmed by anxiety, trauma, burnout, and chronic stress feel calmer,
      more grounded, and more in control of their lives.
    </p>

    <button className="bg-[#8B5E3C] hover:bg-teal-700 transition-all duration-300 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105">
      Schedule a Consultation
    </button>
  </div>

  {/* Right Column: Hero Image */}
  <div className="relative hidden md:block">
    <Image
      src="/images/hero.jpg"
      alt="Therapy session illustration"
      width={500}
      height={500}
      className="rounded-3xl shadow-lg object-cover w-full h-full"
    />
  </div>
</section>

        {/* ABOUT SECTION */}
<section className="bg-[#ffffff]">
  <div className="max-w-5xl mx-auto px-6 py-28 text-center">
    <h2 className="font-serif text-6xl font-bold mb-8 text-slate-800">
      Meet <span className="text-[#8B5E3C]">Dr. Maya Reynolds, PsyD</span>
    </h2>

    {/* Dr. Maya photo */}
    <div className="mb-10 flex justify-center">
      <Image
        src="/images/maya.jpg"
        alt="Dr. Maya Reynolds"
        width={260}
        height={260}
        className="rounded-3xl shadow-xl object-cover ring-4 ring-[#eef5f2]"
      />
    </div>

    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
      Dr. Maya Reynolds is a licensed clinical psychologist based in Santa Monica,
      California, offering therapy for adults who struggle with anxiety, panic,
      trauma, and burnout. Many of her clients are thoughtful, high-achieving
      professionals who feel stuck in overthinking, constant tension, or emotional
      exhaustion. Her approach is warm, collaborative, and grounded, integrating
      evidence-based methods like CBT, EMDR, mindfulness-based practices, and
      body-oriented techniques to support both emotional and nervous system
      regulation.
    </p>
  </div>
</section>

{/* SERVICES SECTION */}
<section id="services" className="bg-[#f6f3ee]">
  <div className="max-w-7xl mx-auto px-6 py-28">
    <h2 className="font-serif text-5xl font-bold mb-16 text-center text-slate-800">
      Therapy <span className="text-[#8B5E3C]">Services</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h3 className="font-serif text-2xl font-semibold mb-4 text-slate-800">
          Anxiety & Panic Therapy
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Support for chronic worry, panic attacks, and constant nervous system
          tension. Dr. Maya Reynolds uses evidence-based approaches like CBT and
          mindfulness-based techniques to help you feel calmer, more grounded, and
          more in control of daily life.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h3 className="font-serif text-2xl font-semibold mb-4 text-slate-800">
          Trauma & EMDR Therapy
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Trauma-focused therapy for single-incident and complex trauma. Sessions
          are paced carefully with an emphasis on safety, stabilization, and nervous
          system regulation using EMDR and body-oriented techniques.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h3 className="font-serif text-2xl font-semibold mb-4 text-slate-800">
          Burnout & High-Pressure Professionals
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Therapy for professionals, creatives, and high-achievers dealing with
          burnout, perfectionism, and chronic stress. A space to slow down,
          reconnect with yourself, and build more sustainable ways of living and
          working.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* OFFICE SECTION */}
      <section id="office" className="w-full bg-[#f6f3ee] py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6" >
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6 text-slate-800">
              A Calm, Private Office in <span className="text-[#8B5E3C]">Santa Monica</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Dr. Maya Reynolds offers in-person therapy from her Santa Monica office, a
              quiet and welcoming space designed to feel calm, private, and grounding.
              The office features natural light and a comfortable, uncluttered
              environment to help clients feel more at ease from the moment they arrive.
            </p>

            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              In addition to in-person sessions, Dr. Reynolds also provides secure
              telehealth therapy for clients located anywhere in California.
            </p>

            <p className="text-slate-700 font-medium">
              📍 123th Street 45 W, Santa Monica, CA 90401
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/office1.jpg"
              alt="Calm and welcoming therapy office in Santa Monica"
              width={300}
              height={200}
              className="h-48 w-full rounded-2xl object-cover shadow-inner"
            />
            <Image
              src="/images/office2.jpg"
              alt="Calm and welcoming therapy office in Santa Monica"
              width={300}
              height={200}
              className="h-48 w-full rounded-2xl object-cover shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
<section id="faq" className="bg-[#f6f3ee]">
  <div className="max-w-5xl mx-auto px-6 py-28">
    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center text-slate-800">
      Frequently Asked <span className="text-[#8B5E3C]">Questions</span>
    </h2>

    <div className="space-y-6">
      {/* FAQ Item */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-serif text-xl font-semibold mb-3 text-slate-800">
          Who do you typically work with?
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Dr. Maya Reynolds works primarily with adults who feel overwhelmed by
          anxiety, stress, trauma, or burnout. Many clients are high-achieving
          professionals, creatives, or thoughtful individuals who appear “fine” on
          the outside but feel exhausted, tense, or stuck internally.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-serif text-xl font-semibold mb-3 text-slate-800">
          What issues do you specialize in?
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Dr. Reynolds specializes in anxiety, panic, trauma, chronic stress, and
          professional burnout. She works with both single-incident trauma and more
          complex, long-standing patterns related to early life experiences,
          relationships, or prolonged stress.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-serif text-xl font-semibold mb-3 text-slate-800">
          What is your approach to therapy?
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Therapy is warm, collaborative, and structured enough to feel supportive
          while still allowing space for depth and reflection. Dr. Reynolds
          integrates evidence-based approaches including Cognitive Behavioral
          Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented
          techniques to support both emotional and nervous system regulation.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-serif text-xl font-semibold mb-3 text-slate-800">
          Do you offer trauma-focused therapy?
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Yes. Trauma work is an important part of Dr. Reynolds’ practice. Sessions
          are paced carefully, with an emphasis on safety, stabilization, and helping
          clients feel more regulated in their daily lives—not just during sessions.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-serif text-xl font-semibold mb-3 text-slate-800">
          Do you offer in-person and online sessions?
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Yes. Dr. Reynolds offers in-person therapy from her Santa Monica office as
          well as secure telehealth sessions for clients located anywhere in
          California.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-[#f6f3ee] mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4">
              Dr. Maya Reynolds, PsyD
            </h3>
            <p className="text-slate-600 mb-4">
              Licensed Clinical Psychologist offering therapy for anxiety, trauma, and
              burnout in Santa Monica, California. Compassionate, evidence-based care
              for adults seeking calm, clarity, and long-term change.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-2xl font-semibold text-slate-800 mb-4">Contact</h4>
            <p className="text-slate-600 mb-2">📍 123 5th Street West, Santa Monica, CA 90401</p>
            <p className="text-slate-600 mb-2">📞 Phone: (000) 000-0000</p>
            <p className="text-slate-600">✉️ Email: contact@drmayareynolds.com</p>
          </div>

          <div>
            <h4 className="font-serif text-2xl font-semibold text-slate-800 mb-4">Start Your Therapy Journey</h4>
            <p className="text-slate-600 mb-6">
              Whether you’re struggling with anxiety, trauma, or burnout, support is
              available. Take the first step toward feeling more grounded and in control.
            </p>
            <button className="bg-[#8B5E3C] hover:bg-teal-700 transition-all duration-300 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
        </div>
      </footer>
    </main>
  </>
  );
}