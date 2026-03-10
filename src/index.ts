
// Scroll to section function


interface ScrollConfig {
  id: string;
}

export const scrollToSection = ({ 
  id, 
}: ScrollConfig) => {
  
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
