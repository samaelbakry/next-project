import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BreadCrumb = ({postDetails}) => {
  return <>
<div className="max-w-7xl mx-auto p-2">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    {postDetails ?  <>
     <BreadcrumbItem>
      <BreadcrumbPage>Product Details</BreadcrumbPage>
    </BreadcrumbItem> 
    </> : " "}
 
  </BreadcrumbList>
</Breadcrumb>
</div>
  </>
}

export default BreadCrumb
