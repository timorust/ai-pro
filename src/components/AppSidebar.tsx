import { getUser } from '@/auth/server'
import { Note} from "@prisma/client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { prisma } from '@/db/prisma'

async function AppSidebar() {

	const user = await getUser();
	let notes: Note[] = []

	if(user) {
		notes = await prisma.note.findMany({
			where: {
				authorId: user.id
			},
			orderBy: {
				updatedAt: "desc"
			}
			
		})
	}

  return (
    <Sidebar>
      <SidebarContent className='custom-scrollbar'>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
