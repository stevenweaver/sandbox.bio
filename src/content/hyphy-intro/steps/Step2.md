<script>
import Alert from "$components/Alert.svelte";
import Execute from "$components/Execute.svelte";
</script>

Now that we have our NS3 gene alignment and tree, let's see if any of the sites are under selection.

<Execute command={`hyphy fel --alignment WestNileVirus_NS3.fna --ci Yes --output WestNileVirus_NS3.fna.FEL-ci.json`} />

Let's walk through each part of the above command.
- `hyphy`: The **Hy**pothesis Testing Using **Phy**logenies (HyPhy) package is an open-source package for evolutionary analysis of genetic sequences. FEL is one of HyPhy's methods, so we'll first invoke HyPhy
- `fel`: The analysis we want to perform
- `--alignment`: The file with our NS3 gene alignment and phylogeny. 
<Alert>
       If you have separate files for your alignment and your phylogeny, use `--alignment` to specify your alignment file and `--tree` to specify your phylogeny file
</Alert>
- `--output`: What to name your results file
