(() => {
    const startNode = document.getElementById('q259915555-root'); // Assuming 'startNodeId' is the ID
    const endNode = document.getElementById('q261802994'); // Assuming 'endNodeId' is the ID

    function getPath(node) {
        if (!node) return "";
        let path = "";
        while (node && node !== document.body) {
            const idx = Array.prototype.indexOf.call(node.parentNode.children, node) + 1;
            const nodeSelector = node.hasAttribute('c') ? `[id*=${node.getAttribute('c')}]:nth-child(${idx})` : `:nth-child(${idx})`;
            path = `${nodeSelector} > ${path}`;
            node = node.parentNode;
        }
        return path.slice(0, -3); // Remove the last unnecessary ' > '
    }

    function generateSelectorPath(startNode, endNode) {
        const startPath = getPath(startNode);
        const endPath = getPath(endNode);
        const startPathParts = startPath.split(' > ');
        const endPathParts = endPath.split(' > ');

        // Find the first common ancestor in the path
        let commonLength = 0;
        while (startPathParts[commonLength] === endPathParts[commonLength]) {
            commonLength++;
        }

        // Rebuild the path from startNode to endNode
        let path = startPathParts.slice(commonLength).reverse().join(' > ');
        path += ' > ' + endPathParts.slice(commonLength).join(' > ');
        return path;
    }

    console.log(generateSelectorPath(startNode, endNode));
})();
