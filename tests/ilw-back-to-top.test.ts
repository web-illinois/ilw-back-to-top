import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-back-to-top";

const content = html`
    <h1>Back to top</h1>

    <main id="main-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum. Massa vitae tortor condimentum lacinia quis vel eros. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Viverra orci sagittis eu volutpat odio facilisis. At elementum eu facilisis sed odio. Volutpat sed cras ornare arcu dui vivamus arcu. Senectus et netus et malesuada fames ac turpis egestas. Senectus et netus et malesuada. Sed odio morbi quis commodo odio aenean. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Mi eget mauris pharetra et ultrices neque. Tristique et egestas quis ipsum suspendisse ultrices. Ultricies mi quis hendrerit dolor magna eget est. At volutpat diam ut venenatis tellus in metus vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
        </p>

        <h2 id="section1">Section 1</h2>
        <p id="two">Facilisi morbi tempus iaculis urna id volutpat. Pellentesque elit eget gravida cum sociis. Tempus urna et pharetra pharetra massa massa. Aliquet risus feugiat in ante. Nibh mauris cursus mattis molestie a iaculis at. Fames ac turpis egestas maecenas pharetra. Non arcu risus quis varius. Habitasse platea dictumst quisque sagittis purus sit amet. Amet dictum sit amet justo donec enim. In nisl nisi scelerisque eu ultrices vitae auctor eu. Sed adipiscing diam donec adipiscing. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Vulputate sapien nec sagittis aliquam malesuada bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Semper risus in hendrerit gravida. Sit amet nisl suscipit adipiscing bibendum. Sodales ut etiam sit amet nisl purus.
        </p>

        <form style="background: #f9f9f9; padding: 20px; margin: 20px 0; border: 1px solid #ddd;">
            <h3>Sample Form</h3>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" style="margin: 10px; padding: 5px;">
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" style="margin: 10px; padding: 5px;">
            <br>
            <button type="button" style="margin: 10px; padding: 10px 20px; background: #007acc; color: white; border: none; cursor: pointer;">Submit</button>
        </form>

        <p>Lobortis scelerisque fermentum dui faucibus in. Aliquet eget sit amet tellus cras. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ornare massa eget egestas purus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Est sit amet facilisis magna. Pellentesque habitant morbi tristique senectus. Habitant morbi tristique senectus et netus et malesuada fames.
        </p>

        <h2 id="section2">Section 2</h2>
        <p>Lobortis scelerisque fermentum dui faucibus in. Aliquet eget sit amet tellus cras. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ornare massa eget egestas purus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Est sit amet facilisis magna. Pellentesque habitant morbi tristique senectius. Habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <p>Mattis ullamcorper velit sed ullamcorper. Aliquam ultrices sagittis orci a scelerisque purus semper. Gravida cum sociis natoque penatibus et magnis. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ac auctor augue mauris augue neque gravida in fermentum et. Dui ut ornare lectus sit amet est placerat in egestas. In hac habitasse platea dictumst quisque sagittis. Nunc pulvinar sapien et ligula ullamcorper malesuada. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Ultricies mi eget mauris pharetra. Ultrices dui sapien eget mi proin sed libero enim.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum. Massa vitae tortor condimentum lacinia quis vel eros. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Viverra orci sagittis eu volutpat odio facilisis. At elementum eu facilisis sed odio. Volutpat sed cras ornare arcu dui vivamus arcu. Senectus et netus et malesuada fames ac turpis egestas. Senectus et netus et malesuada. Sed odio morbi quis commodo odio aenean. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Mi eget mauris pharetra et ultrices neque. Tristique et egestas quis ipsum suspendisse ultrices. Ultricies mi quis hendrerit dolor magna eget est. At volutpat diam ut venenatis tellus in metus vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
        </p>

        <h2 id="section3">Section 3</h2>
        <p>Facilisi morbi tempus iaculis urna id volutpat. Pellentesque elit eget gravida cum sociis. Tempus urna et pharetra pharetra massa massa. Aliquet risus feugiat in ante. Nibh mauris cursus mattis molestie a iaculis at. Fames ac turpis egestas maecenas pharetra. Non arcu risus quis varius. Habitasse platea dictumst quisque sagittis purus sit amet. Amet dictum sit amet justo donec enim. In nisl nisi scelerisque eu ultrices vitae auctor eu. Sed adipiscing diam donec adipiscing. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Vulputate sapien nec sagittis aliquam malesuada bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Semper risus in hendrerit gravida. Sit amet nisl suscipit adipiscing bibendum. Sodales ut etiam sit amet nisl purus.
        </p>

        <p>Lobortis scelerisque fermentum dui faucibus in. Aliquet eget sit amet tellus cras. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ornare massa eget egestas purus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Est sit amet facilisis magna. Pellentesque habitant morbi tristique senectus. Habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <p>Lobortis scelerisque fermentum dui faucibus in. Aliquet eget sit amet tellus cras. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ornare massa eget egestas purus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Est sit amet facilisis magna. Pellentesque habitant morbi tristique senectus. Habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <p>Mattis ullamcorper velit sed ullamcorper. Aliquam ultrices sagittis orci a scelerisque purus semper. Gravida cum sociis natoque penatibus et magnis. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ac auctor augue mauris augue neque gravida in fermentum et. Dui ut ornare lectus sit amet est placerat in egestas. In hac habitasse platea dictumst quisque sagittis. Nunc pulvinar sapien et ligula ullamcorper malesuada. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Ultricies mi eget mauris pharetra. Ultrices dui sapien eget mi proin sed libero enim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum. Massa vitae tortor condimentum lacinia quis vel eros. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Viverra orci sagittis eu volutpat odio facilisis. At elementum eu facilisis sed odio. Volutpat sed cras ornare arcu dui vivamus arcu. Senectus et netus et malesuada fames ac turpis egestas. Senectus et netus et malesuada. Sed odio morbi quis commodo odio aenean. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Mi eget mauris pharetra et ultrices neque. Tristique et egestas quis ipsum suspendisse ultrices. Ultricies mi quis hendrerit dolor magna eget est. At volutpat diam ut venenatis tellus in metus vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.
        </p>
        <p>Facilisi morbi tempus iaculis urna id volutpat. Pellentesque elit eget gravida cum sociis. Tempus urna et pharetra pharetra massa massa. Aliquet risus feugiat in ante. Nibh mauris cursus mattis molestie a iaculis at. Fames ac turpis egestas maecenas pharetra. Non arcu risus quis varius. Habitasse platea dictumst quisque sagittis purus sit amet. Amet dictum sit amet justo donec enim. In nisl nisi scelerisque eu ultrices vitae auctor eu. Sed adipiscing diam donec adipiscing. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Vulputate sapien nec sagittis aliquam malesuada bibendum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Semper risus in hendrerit gravida. Sit amet nisl suscipit adipiscing bibendum. Sodales ut etiam sit amet nisl purus.
        </p>
        <p>Lobortis scelerisque fermentum dui faucibus in. Aliquet eget sit amet tellus cras. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ornare massa eget egestas purus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Est sit amet facilisis magna. Pellentesque habitant morbi tristique senectus. Habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <p>Lobortis scelerisque fermentum dui faucibus in. Aliquet eget sit amet tellus cras. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ornare massa eget egestas purus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam ultrices sagittis orci a scelerisque purus semper. Scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Est sit amet facilisis magna. Pellentesque habitant morbi tristique senectus. Habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <p>Mattis ullamcorper velit sed ullamcorper. Aliquam ultrices sagittis orci a scelerisque purus semper. Gravida cum sociis natoque penatibus et magnis. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ac auctor augue mauris augue neque gravida in fermentum et. Dui ut ornare lectus sit amet est placerat in egestas. In hac habitasse platea dictumst quisque sagittis. Nunc pulvinar sapien et ligula ullamcorper malesuada. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Ultricies mi eget mauris pharetra. Ultrices dui sapien eget mi proin sed libero enim.</p>
    </main>

    <ilw-back-to-top></ilw-back-to-top>
`;

test("renders back-to-top component", async () => {
    const screen = render(content);
    const element = screen.container.querySelector('ilw-back-to-top');
    await expect.element(element).toBeInTheDocument();
});

test("renders button with default aria-label", async () => {
    const screen = render(content);
    const element = screen.container.querySelector('ilw-back-to-top');
    await expect.element(element).toBeInTheDocument();

    const button = element?.shadowRoot?.querySelector('button');
    await expect.element(button).toBeInTheDocument();
    expect(button?.getAttribute('aria-label')).toBe('Back to top');
});

test("renders button with custom alt text", async () => {
    const customContent = html`
        <ilw-back-to-top alt="Return to top"></ilw-back-to-top>
    `;

    const screen = render(customContent);
    const element = screen.container.querySelector('ilw-back-to-top');
    await expect.element(element).toBeInTheDocument();

    // Wait for the component to fully render
    await new Promise(resolve => setTimeout(resolve, 50));

    const button = element?.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-label')).toBe('Return to top');
});

test("renders SVG icon", async () => {
    const screen = render(html`<ilw-back-to-top></ilw-back-to-top>`);
    const element = screen.container.querySelector('ilw-back-to-top');
    await expect.element(element).toBeInTheDocument();

    // Wait for the component to fully render
    await new Promise(resolve => setTimeout(resolve, 50));

    const svg = element?.shadowRoot?.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute('role')).toBe('presentation');
});