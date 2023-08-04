import { create } from "react-test-renderer";
import { Pagination } from "./Pagination";

describe("pagination component tests", () => {
  test("page count is 11 but should be showed only 10", () => {
    const component = create(
      <Pagination
        totalItemsCount={11}
        pageSize={1}
        partSize={10}
        currentPage={2}
        //@ts-ignore
        toSetCurrentPage={() => {}}
        getPageUsers={() => {}}
      />
    );
    const root = component.root;
    const spans = root.findAllByType("span");
    expect(spans.length).toBe(10);
  });
  test("if pages count is more then 10 button NEXT should be present", () => {
    const component = create(
      <Pagination
        totalItemsCount={11}
        pageSize={1}
        partSize={10}
        currentPage={2}
        // @ts-ignore
        toSetCurrentPage={() => {}}
        getPageUsers={() => {}}
      />
    );
    const root = component.root;
    const button = root.findAllByType("button");
    expect(button.length).toBe(1);
  });
});
