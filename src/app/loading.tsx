import { Loader } from "@/components/ui/loader";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" flex justify-center items-center h-screen">
      <Loader variant="circular" className="h-10 w-10 " />
    </div>
  );
}
