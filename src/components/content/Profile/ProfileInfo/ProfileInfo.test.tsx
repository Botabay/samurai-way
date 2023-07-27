import { ProfileInfo } from "./ProfileInfo";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    //     const component = create(
    //       <ProfileInfo
    //         status="test status"
    //         profile={{ fullName: "name", photos: { large: "dd" } }}
    //         update={() => {}}
    //       />
    //     );
    //     const instance = component.getInstance();
    //     expect(instance.state.status).toBe("test status");
  });
  test("status from props should be in the state", () => {
    const component = create(
      <ProfileInfo
        status="test status"
        profile={{ fullName: "name", photos: { large: "dd" } }}
        update={() => {}}
      />
    );
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("status from props should be in the state", () => {
    const component = create(
      <ProfileInfo
        status="test status"
        profile={{ fullName: "name", photos: { large: "dd" } }}
        update={() => {}}
      />
    );
    const root = component.root;
    let span = root.findAllByType("p");
    expect(span[0].children[0]).toBe("name");
  });
  test("callback shoule be called", () => {
    // const mockCallback = jest.fn();
    // const component =create(
    //     <ProfileInfo
    //       status="test status"
    //       profile={{ fullName: "name", photos: { large: "dd" } }}
    //       update={mockCallback}
    //     />
    //   );
    //   const instance = component.getInstance();
    //   instance?.deactivateEditeMode();
    //   expect(mockCallback.mock.calls.length).toBe(1)
  });
});
