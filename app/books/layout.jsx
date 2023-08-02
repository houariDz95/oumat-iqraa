import Navbar from "@/components/Nav";

export default function Layout({ children }) {
    return (
        <div> 
          <Navbar />
          {children}
        </div>
    )
  }
  