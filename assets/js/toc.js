(function() {
  'use strict';

  function initTOC() {
    const postContent = document.querySelector('.post-content');
    const tocContainer = document.querySelector('.toc');
    if (!postContent || !tocContainer) return;

    // include virtual markers
    const nodes = postContent.querySelectorAll('h1, h2, h3, [data-toc]');
    if (!nodes.length) {
      tocContainer.remove();
      return;
    };

    // helper to read level/text
    function getLevel(el) {
      if (el.hasAttribute('data-toc')) return +(el.getAttribute('data-toc-level') || 3);
      return Number(el.tagName[1]); // 1..6
    }
    function getText(el) {
      return el.hasAttribute('data-toc') ? el.getAttribute('data-toc') : el.textContent.trim();
    }

    // Generate IDs if missing
    nodes.forEach((node, i) => {
      if (!node.id) {
        const title = getText(node);
        node.id = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '') || `heading-${i}`;
      }
    });

    // Build TOC
    // Header "Contents"
    const header = document.createElement('div');
    header.className = 'toc-header';
    header.textContent = 'Contents';
    tocContainer.appendChild(header);

    // Build nested list using a UL-per-level map
    const root = document.createElement('ul');
    const ulForLevel = [];
    ulForLevel[0] = root; // root level list
    let h2n = 0;

    nodes.forEach(node => {
      const level = getLevel(node);
      const title = getText(node);

      // Find nearest existing parent UL below this level
      let parentLevel = Math.max(0, level - 1);
      while (parentLevel > 0 && !ulForLevel[parentLevel]) parentLevel--;

      const parentUL = ulForLevel[parentLevel] || ulForLevel[0];

      // Create item
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${node.id}`;
      a.className = 'toc-link';
      if (level === 2) {
        h2n += 1;
        a.textContent = `${h2n}  ${title}`; // no space after number
      } else {
        a.textContent = title;
      }
      li.appendChild(a);
      parentUL.appendChild(li);

      // Reset deeper levels so siblings (e.g., h2→h2→h2) don't nest
      for (let i = level; i < ulForLevel.length; i++) {
        ulForLevel[i] = undefined;
      }

      // Prepare a UL for potential children of this level
      const childUL = document.createElement('ul');
      li.appendChild(childUL);
      ulForLevel[level] = childUL;
    });

    tocContainer.appendChild(root);

    // Smooth scroll
    tocContainer.addEventListener('click', e => {
      const link = e.target.closest('.toc-link');
      if (!link) return;
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Scroll spy
    const links = tocContainer.querySelectorAll('.toc-link');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.toggle(
            'active',
            l.getAttribute('href') === `#${entry.target.id}`
          ));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    // for IntersectionObserver, observe both real headings and [data-toc]
    nodes.forEach(n => observer.observe(n));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTOC);
  } else {
    initTOC();
  }
})();
