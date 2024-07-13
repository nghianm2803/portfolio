import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Project from '@/components/project/Project'
import Career from '@/components/career/Career'
import Sidebar from '@/components/sidebar/Sidebar'
// import Blog from '@/components/blog/Blog'

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Career />
        <Project />
        {/* <Blog /> */}
        <Contact />
      </main>
    </main>
  )
}
