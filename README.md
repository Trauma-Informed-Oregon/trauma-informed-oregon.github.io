# trauma-informed-oregon.github.io
Trauma Informed Oregon interactive resources

## Shared analytics

TIO-owned tools that use aggregate page-view analytics include this line in `index.html`:

```html
<script defer src="https://tools.traumainformedoregon.org/analytics.js"></script>
```

The shared file configures standard page-view measurement for the TIO Web Tools property. It does not add custom interaction events or send written responses, selections, query strings, URL fragments, or referral URLs.

Omit the script from any tool with an explicit no-analytics agreement or privacy promise. What Now/ABNAO intentionally does not include it.
