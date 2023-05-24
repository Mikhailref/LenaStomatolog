// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the accessibility panel element
    var accessibilityPanel = document.getElementById("accessibility-panel");

    // Get the toggle panel button
    var togglePanelBtn = document.getElementById("toggle-panel-btn");

    // Get the settings element
    var settings = document.getElementById("settings");

    // Get the font size selection element
    var fontSizeSelect = document.getElementById("font-size");

    // Get the color scheme selection element
    var colorSchemeSelect = document.getElementById("color-scheme");

    // Get the line spacing selection element
    var lineSpacingSelect = document.getElementById("line-spacing");

    // Get the letter spacing selection element
    var letterSpacingSelect = document.getElementById("letter-spacing");

    // Get the contrast selection element
    var contrastSelect = document.getElementById("contrast");

    // Add event listeners
    togglePanelBtn.addEventListener("click", togglePanel);
    fontSizeSelect.addEventListener("change", changeFontSize);
    colorSchemeSelect.addEventListener("change", changeColorScheme);
    lineSpacingSelect.addEventListener("change", changeLineSpacing);
    letterSpacingSelect.addEventListener("change", changeLetterSpacing);
    contrastSelect.addEventListener("change", changeContrast);

    // Function to toggle the accessibility panel
    function togglePanel() {
        settings.classList.toggle("show");
    }

    // Function to change the font size
    function changeFontSize() {
        var selectedFontSize = fontSizeSelect.value;
        document.body.style.fontSize = selectedFontSize;
    }

    // Function to change the color scheme
    function changeColorScheme() {
        var selectedColorScheme = colorSchemeSelect.value;
        if (selectedColorScheme === "dark") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    // Function to enable dark mode
    function enableDarkMode() {
        document.body.classList.add("dark-mode");
    }

    // Function to disable dark mode
    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
    }

    // Function to change the line spacing
    function changeLineSpacing() {
        var selectedLineSpacing = lineSpacingSelect.value;
        document.body.style.lineHeight = selectedLineSpacing;
    }

    // Function to change the letter spacing
    function changeLetterSpacing() {
        var selectedLetterSpacing = letterSpacingSelect.value;
        document.body.style.letterSpacing = selectedLetterSpacing;
    }

    // Function to change the contrast
    function changeContrast() {
        var selectedContrast = contrastSelect.value;
        if (selectedContrast === "high") {
            enableHighContrast();
        } else {
            disableHighContrast();
        }
    }

    // Function to enable high contrast
    function enableHighContrast() {
        document.body.classList.add("high-contrast");
    }

    // Function to disable high contrast
    function disableHighContrast() {
        document.body.classList.remove("high-contrast");
    }
});

