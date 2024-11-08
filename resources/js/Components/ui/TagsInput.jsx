import { XCircle } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
export const TagsInput = ({ tags, setTags, editTag = true }) => {
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const editInputRef = useRef(null);
    const handleAddTag = (e) => {
        const trimmedInput = input.trim();
        if ((e.key === "Enter" || e.key === ",") && trimmedInput) {
            e.preventDefault();
            if (editingIndex !== null) {
                const updatedTags = [...tags];
                updatedTags[editingIndex] = trimmedInput;
                setTags(updatedTags);
                setEditingIndex(null);
            } else if (!tags.includes(trimmedInput)) {
                setTags([...tags, trimmedInput]);
            }
            setInput("");
        }
    };
    const handleRemoveTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
        if (editingIndex !== null) {
            setEditingIndex(null);
        }
    };
    const handleEditTag = (index) => {
        if (editTag) {
            setInput(tags[index]);
            setEditingIndex(index);
            setTimeout(() => editInputRef.current?.focus(), 0);
        }
    };
    const handleBlur = () => {
        if (editingIndex !== null) {
            const updatedTags = [...tags];
            const trimmedInput = input.trim();
            if (trimmedInput) {
                updatedTags[editingIndex] = trimmedInput;
            } else {
                updatedTags.splice(editingIndex, 1);
            }
            setTags(updatedTags);
            setEditingIndex(null);
        }
        setInput("");
    };
    useEffect(() => {
        if (editInputRef.current) {
            editInputRef.current.style.width = `${input.length + 1}ch`;
        }
    }, [input]);
    return (
        <div className="flex flex-wrap items-center gap-2 px-1 py-1 border border-zinc-400 hover:border-zinc-500 rounded-lg focus-within:border-blue-500">
            {tags.map((tag, index) => (
                <div key={tag} className="relative">
                    {editTag && editingIndex === index ? (
                        <input
                            ref={editInputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleAddTag}
                            onBlur={handleBlur}
                            className="px-2 py-1 text-sm border rounded outline-none"
                            placeholder="Edit tag..."
                            style={{ width: `${input.length + 1 * 1.2}px` }}
                            autoFocus
                        />
                    ) : (
                        <span
                            onClick={() => handleEditTag(index)}
                            className="flex items-center gap-1 pr-1 pl-2 py-0.5 text-sm font-medium text-white bg-secondary rounded cursor-pointer hover:bg-blue-700"
                        >
                            {tag}
                            <XCircle
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveTag(tag);
                                }}
                                className="h-4 w-4 cursor-pointer"
                            />
                        </span>
                    )}
                </div>
            ))}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleAddTag}
                className={`flex-grow px-2 py-1 text-sm focus:ring-0 border-none outline-none bg-background rounded-md ${
                    editingIndex !== null ? "opacity-0" : "opacity-100"
                }`}
                placeholder="Add a tag..."
            />
        </div>
    );
};
