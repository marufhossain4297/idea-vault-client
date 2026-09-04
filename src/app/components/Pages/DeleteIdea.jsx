"use client"
import { AlertDialog, Button } from "@heroui/react"
import { JetBrains_Mono } from "next/font/google";
import { MdDeleteOutline } from "react-icons/md";


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});


const DeleteIdea = ({ idea }) => {
    const { _id } = idea

    const deleteIdea = async () => {
        const res = await fetch(`https://idea-vault-server-opal.vercel.app/idea/${_id}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        if (data) {
            window.location.reload()
        }
    }

    return (
        <AlertDialog>
            <Button className={`px-4 py-2 border border-[#FF383C] font-semibold text-[#FF383C] rounded-xl shadow-none bg-transparent hover:bg-[#E2E2E2] btn ${jetBrainsMono.className}`}>
                Delete Idea <MdDeleteOutline className="text-xl" />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-110">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete your Idea?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>&quot;{idea?.title}&quot;</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={() => deleteIdea()} slot="close" variant="danger">
                                Delete Idea
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteIdea;