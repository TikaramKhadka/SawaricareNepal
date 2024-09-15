import AdminSidebar from '@/components/(authenticate)/adminsidebar/page'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
        <AdminSidebar/>
      {children}
    </div>
  )
}

export default AdminLayout
