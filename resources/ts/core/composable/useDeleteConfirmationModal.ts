import { ref, reactive} from 'vue';
import type { Ref } from 'vue';
interface ConfirmationOptions {
  title: string;
  cancel: boolean;
  text: string | null;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
  btn?: string | null;
  icon?: string;
  color?: string;
}
const showConfirmation: Ref<boolean> = ref(false);
const isConfirmationModalActiveLoader: Ref<boolean> = ref(false);
export const confirmationOptions = reactive<ConfirmationOptions>({
  title: 'Cancel Order ?',
  text:
    'When you delete your Order, you loose all the related data and it will be kept in recycle bin and cleared after 30 days?',
  onConfirm: null,
  onCancel: null,
  btn: 'Yes, Cancel',
  icon: 'delete',
  color: '#F85C75',
    cancel:true,
});

export function useDeleteConfirmationModal() {
  const confirmAction = () => {
    // showConfirmation.value = false;
    const { onConfirm } = confirmationOptions;
    if (onConfirm) {
      onConfirm();
    }
  };

  const cancelAction = () => {
    showConfirmation.value = false;
    const { onCancel } = confirmationOptions;
    if (onCancel) {
      onCancel();
    }
  };

  const showConfirmDeleteModal = async (options: {
    onCancel: () => void;
    onConfirm: () => Promise<void>;
  }) => {
    return new Promise<void>((resolve, reject) => {

      Object.assign(confirmationOptions, {
        ...options,
        onCancel: () => {
          options.onCancel();
          resolve();
        },
        onConfirm: async () => {
          try {
            await options.onConfirm();
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      });

      // Show the confirmation modal
      showConfirmation.value = true;
    });



  };

  const resetConfirmationOptions = () => {
    confirmationOptions.title = 'Delete record ?';
    confirmationOptions.text =
      'When you delete your records, you lose all the related data, and it will be kept in the recycle bin and cleared after 30 days.';
    confirmationOptions.btn = 'Yes, Delete';
    confirmationOptions.icon = 'delete';
    confirmationOptions.color = '#F85C75';
    confirmationOptions.onConfirm = null;
    confirmationOptions.onCancel = null;
    confirmationOptions.cancel = true;
  };
  return {
    showConfirmation,
    isConfirmationModalActiveLoader,
    resetConfirmationOptions,
    confirmAction,
    cancelAction,
    showConfirmDeleteModal,
  };
}
