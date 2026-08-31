"use client"
import { AlertDialog, Button } from "@heroui/react"
import { toast } from "sonner"

const DeleteComment = ({ comment }) => {

    const { _id } = comment

    const deleteComm = async () => {
        const res = await fetch(`http://localhost:8000/comment/${_id}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        if(data){
            window.location.reload()
        }
    }

    return (
        <AlertDialog>
            <Button className='text-[#FF383C] bg-transparent p-0 font-semibold'>Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-110">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete your comment?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>&quot;{comment?.comment}&quot;</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={() => deleteComm()} slot="close" variant="danger">
                                Delete Comment
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default DeleteComment;