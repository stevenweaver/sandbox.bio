<script>
import Alert from "$components/Alert.svelte";
import Execute from "$components/Execute.svelte";
</script>

We need a gene alignment and corresponding phylogeny to run FEL. You can download both using the following command.

<Execute command={`curl "https://raw.githubusercontent.com/veg/selection-tutorial/main/data/WestNileVirus_NS3.fna" > WestNileVirus_NS3.fna`} />

In this case, the phylogeny is formatted as a Newick string and appended to the gene alignment file. Hyphy will accept either a single file containing both the alignment and the phylogeny, or the alignment and the phylogeny as individual files.


