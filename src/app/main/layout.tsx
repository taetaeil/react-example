import CmSidebar from '../Sidebar' // sidebar 컴포넌트

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CmSidebar contents={children}></CmSidebar>
}
