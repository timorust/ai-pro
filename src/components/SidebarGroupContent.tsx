"use client"

import { Note } from '@prisma/client'

type Props = {
	notes: Note[] 
}

const SidebarGroupContent = ({notes}: Props) => {
	return (
		<div>
			SidebarGroupContent
		</div>
	)
}

export default SidebarGroupContent
