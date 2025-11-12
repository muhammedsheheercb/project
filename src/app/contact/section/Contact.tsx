'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Check, AlertCircle, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';

const FormValidation = z.object({
  first: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'First name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine(name => name.trim().length > 0, {
      message: 'First name cannot be empty or just spaces.',
    }),

  last: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50, { message: 'Last name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'Last name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine(name => name.trim().length > 0, {
      message: 'Last name cannot be empty or just spaces.',
    }),

  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email must not exceed 100 characters.' }),

  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .regex(/^\+?[\d\s()-]+$/, {
      message:
        'Phone number can only contain digits, spaces, parentheses, hyphens, and plus sign.',
    })
    .refine(
      phone => {
        const digitsOnly = phone.replace(/\D/g, '');
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      { message: 'Phone number must contain between 10-15 digits.' },
    ),

  message: z.string().min(1, { message: 'Message is required.' }),
});

type FormData = z.infer<typeof FormValidation>;

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      first: '',
      last: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const bookTableMutation = useMutation({
    mutationFn: async (values: FormData) => {
      return await axios.post('/api/contact', values);
    },
    onSuccess: () => {
      setModalType('success');
      setShowModal(true);
    },
    onError: () => {
      setModalType('error');
      setShowModal(true);
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  return (
    <section className="relative h-full w-full bg-[#000000] py-8 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-4 md:px-20">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <span className="font-poppins text-sm uppercase tracking-[3%] text-[#D1A04D] md:text-base">
            Get In Touch
          </span>
          <h1 className="font-josefin_Sans text-3xl font-[500] uppercase text-[#E6E6E6] md:text-5xl">
            Contact Us
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <div className="space-y-6">
              <h2 className="font-josefin_Sans text-xl font-[500] uppercase text-[#E6E6E6] md:text-2xl">
                Visit Our Restaurant
              </h2>
              <p className="font-poppins max-w-[500px] text-sm font-[300] text-[#E6E6E6] md:text-base">
                Experience innovative all-day dining at True Manchester, where
                creativity meets flavor. Our menu is crafted with the finest
                seasonal ingredients, offering a unique blend of modern dishes
                and classic favorites. Paired with expertly curated cocktails
                and warm hospitality, every visit is designed to feel truly
                unforgettable.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4 rounded-lg border border-[#D1A04D]/30 bg-[#111111] p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A04D]">
                  <Phone className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="font-poppins text-sm font-[300] uppercase tracking-[2px] text-[#E6E6E6]">
                    Phone
                  </h3>
                  <Link
                    href="tel: +441616128506"
                    className="font-poppins text-base text-[#E6E6E6] transition-colors hover:text-[#D1A04D]"
                  >
                    +44 161 612 8506
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-lg border border-[#D1A04D]/30 bg-[#111111] p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A04D]">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="font-poppins text-sm font-[300] uppercase tracking-[2px] text-[#E6E6E6]">
                    Location
                  </h3>
                  <Link
                    target="_blank"
                    href={'https://share.google/MElOt6c9IDJ4DB4mQ'}
                    className="font-poppins text-base text-[#E6E6E6] transition-colors hover:text-[#D1A04D]"
                  >
                    126 Burton Rd, West Didsbury, <br /> Manchester M20 1JQ,
                    United Kingdom
                  </Link>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 rounded-lg border border-[#D1A04D]/30 bg-[#111111] p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A04D]">
                  <Clock className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="font-poppins text-sm font-[300] uppercase tracking-[2px] text-[#E6E6E6]">
                    Hours
                  </h3>
                  <p className="font-poppins text-base text-[#E6E6E6]">
                    Monday-Thursday: 8 AM - 5 PM <br />
                    Friday - Saturday: 8 AM - 8 PM <br />
                    Sunday - 9 AM - 5 PM{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="rounded-lg border border-[#D1A04D]/30 bg-[#111111] p-6 shadow-lg md:p-8">
              <div className="mb-6">
                <h2 className="font-josefin_Sans text-xl font-[500] uppercase text-[#E6E6E6] md:text-2xl">
                  Send us a Message
                </h2>
                <p className="font-poppins mt-2 text-sm font-[300] text-[#E6E6E6]/80">
                  We&apos;d love to hear from you. Send us a message and
                  we&apos;ll respond as soon as possible.
                </p>
              </div>

              {isMounted ? (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="first"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-none border-0 border-b-2 border-b-[#D1A04D]/50 bg-transparent px-0 text-[#E6E6E6] placeholder:text-[#E6E6E6]/60 focus-visible:border-b-[#D1A04D] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="last"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name"
                                {...field}
                                className="h-12 rounded-none border-0 border-b-2 border-b-[#D1A04D]/50 bg-transparent px-0 text-[#E6E6E6] placeholder:text-[#E6E6E6]/60 focus-visible:border-b-[#D1A04D] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Email Address"
                              type="email"
                              {...field}
                              className="h-12 rounded-none border-0 border-b-2 border-b-[#D1A04D]/50 bg-transparent px-0 text-[#E6E6E6] placeholder:text-[#E6E6E6]/60 focus-visible:border-b-[#D1A04D] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Phone Number"
                              type="tel"
                              {...field}
                              className="h-12 rounded-none border-0 border-b-2 border-b-[#D1A04D]/50 bg-transparent px-0 text-[#E6E6E6] placeholder:text-[#E6E6E6]/60 focus-visible:border-b-[#D1A04D] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message"
                              {...field}
                              className="min-h-[120px] resize-none rounded-none border-0 border-b-2 border-b-[#D1A04D]/50 bg-transparent px-0 text-[#E6E6E6] placeholder:text-[#E6E6E6]/60 focus-visible:border-b-[#D1A04D] focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={bookTableMutation.isPending}
                        className="font-open_Sans w-full bg-[#D1A04D] px-6 py-6 text-sm font-[600] uppercase tracking-[2px] text-black transition-transform duration-150 hover:bg-[#E6B862] active:scale-95 disabled:opacity-50"
                      >
                        {bookTableMutation.isPending
                          ? 'Sending Message...'
                          : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </Form>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="h-12 animate-pulse rounded bg-[#D1A04D]/10" />
                    <div className="h-12 animate-pulse rounded bg-[#D1A04D]/10" />
                  </div>
                  <div className="h-12 animate-pulse rounded bg-[#D1A04D]/10" />
                  <div className="h-12 animate-pulse rounded bg-[#D1A04D]/10" />
                  <div className="h-[120px] animate-pulse rounded bg-[#D1A04D]/10" />
                  <div className="h-12 animate-pulse rounded bg-[#D1A04D]/10" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <div className="mb-6 text-center">
            <span className="font-poppins text-sm uppercase tracking-[3%] text-[#D1A04D] md:text-base">
              Visit Us
            </span>
            <h2 className="font-josefin_Sans mt-2 text-2xl font-[500] uppercase text-[#E6E6E6] md:text-3xl">
              Find Our Location
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#D1A04D]/30 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.597900127207!2d-2.243134423407132!3d53.42876017231331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb37fa2aaf98d%3A0x20ab8bee1a9b65ee!2sTrue%20Manchester!5e1!3m2!1sen!2sin!4v1755595934896!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {isMounted && showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-lg border border-[#D1A04D]/30 bg-[#111111] p-6 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {modalType === 'success' ? (
                <>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A04D]/20">
                    <Check className="h-8 w-8 text-[#D1A04D]" />
                  </div>
                  <h3 className="font-josefin_Sans mb-2 text-xl font-[500] uppercase text-[#E6E6E6]">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-poppins mb-6 font-[300] text-[#E6E6E6]/80">
                    Thank you for contacting us. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        setShowModal(false);
                        form.reset();
                      }}
                      className="font-open_Sans bg-[#D1A04D] font-[600] uppercase tracking-[2px] text-black hover:bg-[#E6B862]"
                    >
                      Perfect!
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="font-open_Sans border-[#D1A04D] font-[600] uppercase tracking-[2px] text-[#E6E6E6] hover:bg-[#D1A04D]/10"
                    >
                      Close
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <AlertCircle className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="font-josefin_Sans mb-2 text-xl font-[500] uppercase text-[#E6E6E6]">
                    Something Went Wrong
                  </h3>
                  <p className="font-poppins mb-6 font-[300] text-[#E6E6E6]/80">
                    We couldn&apos;t send your message. Please try again or call
                    us directly.
                  </p>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowModal(false)}
                      className="font-open_Sans bg-red-500 font-[600] uppercase tracking-[2px] text-white hover:bg-red-600"
                    >
                      Try Again
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="font-open_Sans border-[#D1A04D] font-[600] uppercase tracking-[2px] text-[#E6E6E6] hover:bg-[#D1A04D]/10"
                    >
                      Close
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
