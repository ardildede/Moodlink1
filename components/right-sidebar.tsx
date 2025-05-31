interface RightSidebarProps {
  currentPage: string
}

export function RightSidebar({ currentPage }: RightSidebarProps) {
  const renderContent = () => {
    if (currentPage === "home") {
      return (
        <>
          <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
            <h3 className="font-bold text-lg mb-4 text-foreground">Trendler</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">#invincible</span>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">%71</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">#GSvsFB</span>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">%92</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
            <h3 className="font-bold text-lg mb-4 text-foreground">Senin Moduna Göre</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-pink-600 font-medium">#huzur</span> {/* Bu renk özel kalabilir */} 
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">%80</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pink-600 font-medium">#enerjik</span> {/* Bu renk özel kalabilir */} 
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">%70</span>
              </div>
            </div>
          </div>
        </>
      )
    }

    if (currentPage === "search") {
      return (
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
          <h3 className="font-bold text-lg mb-4 text-foreground">Popüler Kullanıcılar</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="font-medium text-foreground">KullanıcıA</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <span className="font-medium text-foreground">KullanıcıB</span>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="hidden xl:block fixed right-0 top-0 w-80 h-full bg-background border-l border-border p-4 overflow-y-auto">
      <div className="space-y-4 mt-4">{renderContent()}</div>
    </div>
  )
}
