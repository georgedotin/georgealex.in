import { motion } from "framer-motion";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_minimal_texture_background.png";

export default function Home() {
  const links = [
    {
      name: "Medium",
      icon: <span className="font-serif italic font-bold text-xl">M</span>,
      url: "https://medium.com",
      color: "hover:bg-[#000000] hover:text-white",
      description: "Read my latest thoughts and articles"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com",
      color: "hover:bg-[#E1306C] hover:text-white",
      description: "Visual stories and daily updates"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
      color: "hover:bg-[#0077b5] hover:text-white",
      description: "Professional background and network"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card rounded-xl shadow-xl overflow-hidden border border-border/50"
      >
        {/* Header Image */}
        <div className="h-48 w-full relative overflow-hidden">
          <img 
            src={heroBg} 
            alt="Abstract minimal texture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Profile Section */}
        <div className="px-8 pb-8 -mt-12 relative z-10">
          <div className="w-24 h-24 rounded-full border-4 border-card bg-muted overflow-hidden shadow-sm mx-auto mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center space-y-2 mb-8">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-primary">
              Alex Morgan
            </h1>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
              Digital Creator & Writer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto mt-4">
              Exploring the intersection of design, technology, and human connection.
            </p>
          </div>

          {/* Links Section */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3"
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                variants={item}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center p-4 rounded-lg border border-border bg-background transition-all duration-300 hover:border-transparent hover:shadow-lg ${link.color}`}
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {link.icon}
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium text-sm group-hover:text-inherit">
                    {link.name}
                  </h3>
                  <p className="text-xs text-muted-foreground group-hover:text-white/80">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground/50 font-serif italic">
              © {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
