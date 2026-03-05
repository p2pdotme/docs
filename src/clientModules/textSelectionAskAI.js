import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    const TOOLTIP_ID = 'ask-ai-tooltip';

    const openBielWidget = () => {
        const bielButton = document.querySelector('biel-button');
        if (!bielButton) return;

        // Strategy 1: click shadow DOM button
        const shadowRoot = bielButton.shadowRoot;
        if (shadowRoot) {
            const inner =
                shadowRoot.querySelector('button') ||
                shadowRoot.querySelector('[role="button"]') ||
                shadowRoot.firstElementChild;
            if (inner) {
                inner.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
                return;
            }
        }

        // Strategy 2: click host element
        bielButton.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    };

    const findShadowElement = (selector, root = document) => {
        // Check current root
        let found = root.querySelector?.(selector);
        if (found) return found;

        // Check all child elements that might have shadow roots
        const elements = root.querySelectorAll?.('*') || [];
        for (const el of elements) {
            if (el.shadowRoot) {
                found = findShadowElement(selector, el.shadowRoot);
                if (found) return found;
            }
        }
        return null;
    };

    const passTextToAI = (text) => {
        if (!text) return;

        console.log('[AskAI] Attempting to pass text:', text);

        let attempts = 0;
        const maxAttempts = 100; // 10 seconds

        const interval = setInterval(() => {
            attempts++;

            // Use recursive shadow DOM search to find the elements
            const textarea = findShadowElement('.biel-input__textarea') || findShadowElement('textarea');
            const sendButton = findShadowElement('.biel-input__button') || findShadowElement('button[type="submit"]');

            if (textarea) {
                console.log('[AskAI] Found textarea, setting value.');
                textarea.focus();
                textarea.value = text;

                // Trigger multiple events to ensure framework listeners catch it
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                textarea.dispatchEvent(new Event('change', { bubbles: true }));

                // Auto-submit after a small delay
                if (sendButton) {
                    console.log('[AskAI] Found send button, clicking.');
                    setTimeout(() => {
                        sendButton.click();
                    }, 400);
                }

                clearInterval(interval);
            } else if (attempts >= maxAttempts) {
                console.warn('[AskAI] Could not find Biel input after 5 seconds.');
                clearInterval(interval);
            }
        }, 100);
    };

    // Create the tooltip element
    const createTooltip = () => {
        const existing = document.getElementById(TOOLTIP_ID);
        if (existing) return existing;

        const tooltip = document.createElement('div');
        tooltip.id = TOOLTIP_ID;
        tooltip.innerHTML = '<span class="ask-ai-icon">✦</span> Ask AI';
        tooltip.setAttribute('role', 'button');
        tooltip.setAttribute('tabindex', '0');
        tooltip.setAttribute('aria-label', 'Ask AI about selected text');
        document.body.appendChild(tooltip);

        // Prevent mousedown from clearing the selection / triggering hideTooltip
        tooltip.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        tooltip.addEventListener('click', (e) => {
            e.stopPropagation();
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();

            if (selectedText) {
                openBielWidget();
                passTextToAI(selectedText);
            }
            hideTooltip();
        });

        tooltip.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const selection = window.getSelection();
                const selectedText = selection.toString().trim();

                if (selectedText) {
                    openBielWidget();
                    passTextToAI(selectedText);
                }
                hideTooltip();
            }
        });

        return tooltip;
    };

    const showTooltip = (x, y) => {
        const tooltip = createTooltip();
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.classList.add('visible');
    };

    const hideTooltip = () => {
        const tooltip = document.getElementById(TOOLTIP_ID);
        if (tooltip) {
            tooltip.classList.remove('visible');
        }
    };

    const handleMouseUp = () => {
        setTimeout(() => {
            const selection = window.getSelection();
            const text = selection?.toString().trim();

            if (!text || text.length < 3) {
                hideTooltip();
                return;
            }

            // Check if the selection is inside the main content to avoid tooltips on nav/sidebar
            const mainContent = document.querySelector('main') || document.querySelector('article');
            if (mainContent && !mainContent.contains(selection.anchorNode)) {
                // If we have a main content area but selection is outside, don't show tooltip
                // However, for simplicity across all page types, we can just allow it 
                // but maybe exclude specific areas if needed.
            }

            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            if (rect.width === 0 && rect.height === 0) {
                hideTooltip();
                return;
            }

            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;

            const x = rect.right + scrollX - 60;
            const y = rect.top + scrollY - 44;

            showTooltip(x, y);
        }, 50);
    };

    const handleMouseDown = (e) => {
        if (e.target?.closest?.('#' + TOOLTIP_ID)) return;
        hideTooltip();
    };

    const init = () => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('scroll', hideTooltip, { passive: true });
        createTooltip();
    };

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
}
