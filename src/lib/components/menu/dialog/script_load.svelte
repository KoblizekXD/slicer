<script lang="ts">
    import {
        Dialog,
        DialogHeader,
        DialogContent,
        DialogDescription,
        DialogTitle,
        DialogFooter,
    } from "$lib/components/ui/dialog";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { toast } from "svelte-sonner";
    import { read } from "$lib/script";
    import { cn } from "$lib/components/utils";

    export let open = false;

    let value = "";
    $: {
        if (!open) {
            // clear after closing
            value = "";
        }
    }

    let invalid = false;

    const loadScript = async () => {
        const value0 = value.trim();
        if (!value0) {
            invalid = true;
            return;
        }

        open = false;

        const proto = await read(value0);
        toast.success("Imported", {
            description: `Imported script ${proto.id}.`,
        });
    };
</script>

<Dialog bind:open>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Import script</DialogTitle>
            <DialogDescription>
                Import a script from an arbitrary URL here.
                <p class="italic text-destructive">Scripts have full access to slicer, be aware of what you import!</p>
            </DialogDescription>
        </DialogHeader>
        <div class="grid grid-cols-6 items-center gap-4">
            <Label for="name" class="text-right">URL</Label>
            <Input
                id="name"
                placeholder="https://..."
                class={cn("col-span-5", !invalid || "border-destructive ring-offset-destructive")}
                bind:value
                on:change={() => (invalid = false)}
            />
        </div>
        <DialogFooter>
            <Button type="submit" on:click={loadScript}>Import</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>
