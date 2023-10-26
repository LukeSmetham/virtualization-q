import type { Dataset } from "../types";
import VirtualizedItem from "./VirtualizedItem";

type VirtualizedListProps = {
  items: Dataset[];
  itemHeight?: number;
};

/**
 * Additional Information:
 * - Items are a fixed height (no need to handle cases where each list item can be arbitrarily sized)
 * - The Virtualized List component will be itself a scroll container with fixed dimensions, this is your "window".
 * - The list should render only the children that are visible within this "window," which will move as the user scrolls.
 * - Each list item contains a checkbox, but as the virtualization mechanism unmounts the items we lose this "checked" state, how can we maintain this state as we scroll up and down?
 *
 * BONUS:
 * - Render a couple of items either side of the window so that the virtualization appears seamless.
 */

/**
 * The starting point below renders 50 items in the list (our full dataset contains 100,000 entries - an unfeasible number to directly render to the DOM)
 * Remove the `.slice(0, 49)` code and complete the below component so that we maintain good scrolling & rendering performance, whilst "displaying" the entire list of 100,000 items.
 */

function VirtualizedList({ items, itemHeight = 48 }: VirtualizedListProps) {
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      {items.slice(0, 49).map((item) => (
        <VirtualizedItem
          key={item.id}
          label={item.name}
          style={{ height: itemHeight }}
        />
      ))}
    </div>
  );
}

export default VirtualizedList;
