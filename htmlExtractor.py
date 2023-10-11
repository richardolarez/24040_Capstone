from bs4 import BeautifulSoup

# Replace 'your_input.html' with the path to your HTML file containing the Visio diagram.
input_file = 'BasicVisioDrawing.htm'

def parse_and_sort_visio_components(html_file):
    with open(html_file, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

        # Replace 'component_selector' with the appropriate CSS selector for your components.
        components = soup.select('.component_selector')

        if not components:
            print("No components found.")
            return

        # Sort components based on your criteria.
        sorted_components = sorted(components, key=lambda component: component.get('data-sort-key'))

        # Print or process sorted components.
        for component in sorted_components:
            component_name = component.get('data-name')
            print(f"Component Name: {component_name}")

if __name__ == "__main__":
    parse_and_sort_visio_components(input_file)


