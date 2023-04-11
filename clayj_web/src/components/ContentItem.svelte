<div class="flex flex-col gap-1">
    <div class="flex justify-center">
        <h2 class="text-2xl font-bold flex-grow-0 py-1 max-w-fit border-b-2 border-slate-200">
            <slot name="heading"></slot>
        </h2>
    </div>
    <div class="text-center">
        <slot name="content"></slot>
    </div>
</div>