import { useState, useMemo } from "react";
import { ExternalLink, ChevronUp, ChevronDown, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgencyData } from "@/data/listicles/white-label-seo-agencies";

interface ListicleAgencyTableProps {
  agencies: AgencyData[];
  onScrollToAgency?: (anchor: string) => void;
}

type SortField = "rank" | "finalScore" | "clientRating" | "yearsInBusiness" | "monthlyVisits";
type SortDirection = "asc" | "desc";
type ScoreFilter = "all" | "high" | "medium" | "low";

const ListicleAgencyTable = ({ agencies, onScrollToAgency }: ListicleAgencyTableProps) => {
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [scoreFilter, setScoreFilter] = useState<ScoreFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedAgencies = useMemo(() => {
    let result = [...agencies];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (agency) =>
          agency.name.toLowerCase().includes(query) ||
          agency.websiteDisplay.toLowerCase().includes(query)
      );
    }

    // Apply score filter
    if (scoreFilter !== "all") {
      result = result.filter((agency) => {
        if (scoreFilter === "high") return agency.finalScore >= 70;
        if (scoreFilter === "medium") return agency.finalScore >= 50 && agency.finalScore < 70;
        if (scoreFilter === "low") return agency.finalScore < 50;
        return true;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      let aVal: number;
      let bVal: number;

      switch (sortField) {
        case "finalScore":
          aVal = a.finalScore;
          bVal = b.finalScore;
          break;
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
  }, [agencies, sortField, sortDirection, scoreFilter, searchQuery]);

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

  const getScoreBadgeClass = (score: number) => {
    if (score >= 70) return "bg-green-500/10 text-green-600 border-green-500/20";
    if (score >= 50) return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
    return "bg-red-500/10 text-red-600 border-red-500/20";
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filter by Score:</span>
          <div className="flex gap-1">
            {(["all", "high", "medium", "low"] as ScoreFilter[]).map((filter) => (
              <Button
                key={filter}
                variant={scoreFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setScoreFilter(filter)}
                className="text-xs h-7"
              >
                {filter === "all" && "All"}
                {filter === "high" && "High (70+)"}
                {filter === "medium" && "Medium (50-69)"}
                {filter === "low" && "Low (<50)"}
              </Button>
            ))}
          </div>
        </div>
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
        <table className="w-full min-w-[900px]">
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
              <th
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("finalScore")}
              >
                Score <SortIcon field="finalScore" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedAgencies.map((agency, index) => (
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
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[hsl(var(--accent-blue))] hover:underline inline-flex items-center gap-1"
                  >
                    {agency.websiteDisplay}
                    <ExternalLink className="w-3 h-3" />
                  </a>
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
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getScoreBadgeClass(
                      agency.finalScore
                    )}`}
                  >
                    {agency.finalScore}
                  </span>
                </td>
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
