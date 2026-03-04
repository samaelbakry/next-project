import {Breadcrumb,BreadcrumbItem,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator,} from "@/components/ui/breadcrumb"
import Link from "next/link"

const BreadCrumb = ({postDetails , id}) => {
  return <>
<div className="max-w-7xl mx-auto p-2">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <Link href="/">
      <BreadcrumbPage>Products</BreadcrumbPage>
      </Link>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    {postDetails ?  <>
      <BreadcrumbItem>
      <Link href={`/${id}`}>
      <BreadcrumbPage>Product Details</BreadcrumbPage>
      </Link>
    </BreadcrumbItem>
    </> : " "}
  </BreadcrumbList>
</Breadcrumb>
</div>
  </>
}

export default BreadCrumb
