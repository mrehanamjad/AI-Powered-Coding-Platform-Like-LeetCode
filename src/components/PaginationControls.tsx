"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  currentPage: number;
}

export default function PaginationControls({
  hasNextPage,
  hasPrevPage,
  totalPages,
  currentPage,
}: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    // Clone current params to preserve existing filters (search, difficulty, etc.)
    const params = new URLSearchParams(searchParams.toString());
    
    // Update the page parameter
    params.set("page", newPage.toString());

    // Push the new URL
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <Button
        variant="outline"
        size="sm"
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>

      <div className="text-sm text-muted-foreground font-medium">
        Page {currentPage} of {totalPages}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={!hasNextPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}