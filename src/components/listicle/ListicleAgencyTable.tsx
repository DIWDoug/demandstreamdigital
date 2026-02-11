import { useState, useMemo } from "react";
import { ExternalLink, ChevronUp, ChevronDown, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgencyData } from "@/data/listicles/white-label-seo-agencies";

interface ListicleAgencyTableProps {
  agencies: AgencyData[];
  onScrollToAgency?: (anchor: string) => void;
}

type SortField = "rank" | "clientRating" | "yearsInBusiness" | "monthlyVisits";
type SortDirection = "asc" | "desc";

const ListicleAgencyTable = ({ agencies, onScrollToAgency }: ListicleAgencyTableProps) => {
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedAgencies = useMemo(() => {
    let result = [...agencies];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (agency) =>
          agency.name.toLowerCase().includes(query) ||
          agency.websiteDisplay.toLowerCase().includes(query)
      );
    }

    result.sort((a, b) => {
      let aVal: number;
      let bVal: number;

      switch (sortField) {
        case "clientRating":
          aVal = a.clientRating;
          bVal = b.clientRating;
          break;
        case "yearsInBusiness":
          aVal = a.yearsInBusiness;
          bVal = b.yearsInBusiness;
          break;
        case "monthlyVisits":
          aVal = parseFloat(a.monthlyVisits.replace(/[^0-9.]/g, "")) || 0;
          bVal = parseFloat(b.monthlyVisits.replace(/[^0-9.]/g, "")) || 0;
          break;
        default:
          aVal = a.rank;
          bVal = b.rank;
      }

      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    });

    return result;
  }, [agencies, sortField, sortDirection, searchQuery]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection(field === "rank" ? "asc" : "desc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4 inline ml-1" />
    ) : (
      <ChevronDown className="w-4 h-4 inline ml-1" />
    );
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search agencies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-1.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-48"
        />
      </div>

      {/* Mobile Hint */}
      <p className="text-xs text-muted-foreground sm:hidden">
        ← Swipe to see more →
      </p>

      {/* Table */}
      <div className="overflow-x-auto border border-border rounded-xl">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("rank")}
              >
                Rank <SortIcon field="rank" />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Agency Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Website
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("monthlyVisits")}
              >
                Monthly Visits <SortIcon field="monthlyVisits" />
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("yearsInBusiness")}
              >
                Years <SortIcon field="yearsInBusiness" />
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("clientRating")}
              >
                Rating <SortIcon field="clientRating" />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Min Project
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedAgencies.map((agency) => (
              <tr
                key={agency.name}
                className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${
                  agency.isTopPick ? "bg-primary/5" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <span className={`font-bold ${agency.isTopPick ? "text-primary" : "text-foreground"}`}>
                    {agency.isTopPick ? "⭐" : agency.rank}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`font-medium ${agency.isTopPick ? "text-primary" : "text-foreground"}`}>
                    {agency.name}
                    {agency.isTopPick && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                        Top Pick
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {agency.isTopPick ? (
                    <a
                      href={agency.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[hsl(var(--accent-blue))] hover:underline inline-flex items-center gap-1"
                    >
                      {agency.websiteDisplay}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{agency.websiteDisplay}</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{agency.monthlyVisits}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{agency.yearsInBusiness}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-foreground">{agency.clientRating.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground">({agency.clientReviews})</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{agency.minProject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAndSortedAgencies.length === 0 && (
        <p className="text-center py-8 text-muted-foreground">
          No agencies found matching your search criteria
        </p>
      )}
    </div>
  );
};

export default ListicleAgencyTable;
