<script>
import Link from "$components/Link.svelte";
import Alert from "$components/Alert.svelte";
import Execute from "$components/Execute.svelte";
</script>

<Alert>
	For full documentation, please visit the <Link href="http://hyphy.org/methods/selection-methods/">Hyphy documentation</Link> on methods for inferring selection pressure.
</Alert>

FEL (**F**ixed **E**ffects **L**ikelihood) is a codon evolutionary model designed to test for selection at the site level. Each "site" is a codon. FEL uses a maximum-likelihood (ML) approach to infer nonsynoymous (dN) and synonymous (dS) substitution rates on a per-site basis for a given coding alignment and corresponding phylogeny. This method assumes that the selection pressure for each site is constant along the entire phylogeny.

Evolutionary change at a single site can indicate that a gene has gained a new function, or has lost a previous function. Single-site substitutions frequently occur in viruses, which are under strong evolutionary pressure from the host immune system. To demonstrate how FEL can help identify selection in viral lineages, we'll look at the NS3 gene from West Nile Virus.

<Alert>
	The West Nile Virus dataset was sourced from Brault, A., Huang, CH., Langevin, S. et al. A single positively selected West Nile viral mutation confers increased virogenesis in American crows. Nat Genet **39**, 1162–1166 (2007). https://doi-org.libproxy.temple.edu/10.1038/ng2097
</Alert>

